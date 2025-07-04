import { Router, Request, Response } from 'express';
import { getSession } from '../../config/neo4j';
import { int } from 'neo4j-driver';

const router = Router();

// POST /graph/user - Créer ou mettre à jour un utilisateur (toutes infos dans User)
router.post('/user', async (req: Request, res: Response) => {
  const session = getSession();
  try {

    // Champs obligatoires
    const {
      username, firstName, lastName, email, password
    } = req.body;

    // Champs optionnels
    const gender = req.body.gender ?? '';
    const sexual_preference = req.body.sexual_preference ?? '';
    const age = req.body.age !== undefined ? int(req.body.age) : null;
    const biography = req.body.biography ?? '';
    const location = req.body.location ?? '';
    const status_connection = req.body.status_connection ?? 'offline';
    const last_connection_date = req.body.last_connection_date ?? null;

    if (!username || !firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'username, firstName, lastName, email et password requis' });
    }

    // Vérifier si l'utilisateur existe déjà
    const check = await session.run(`
      MATCH (u:User {email: $email})
      RETURN u
    `, { email });

    let result;
    if (check.records.length > 0) {
      // Mise à jour
      result = await session.run(`
        MATCH (u:User {email: $email})
        SET u.username = $username,
            u.firstName = $firstName,
            u.lastName = $lastName,
            u.password = $password,
            u.gender = $gender,
            u.sexual_preference = $sexual_preference,
            u.age = $age,
            u.biography = $biography,
            u.location = $location,
            u.status_connection = $status_connection,
            u.last_connection_date = $last_connection_date
        RETURN u
      `, {
        username,
        firstName,
        lastName,
        email,
        password,
        gender,
        sexual_preference,
        age,
        biography,
        location,
        status_connection,
        last_connection_date
      });
    } else {
      // Création
      result = await session.run(`
        CREATE (u:User {
          username: $username,
          firstName: $firstName,
          lastName: $lastName,
          email: $email,
          password: $password,
          gender: $gender,
          sexual_preference: $sexual_preference,
          age: $age,
          biography: $biography,
          location: $location,
          status_connection: $status_connection,
          last_connection_date: $last_connection_date,
          createdAt: datetime()
        })
        RETURN u
      `, {
        username,
        firstName,
        lastName,
        email,
        password,
        gender,
        sexual_preference,
        age,
        biography,
        location,
        status_connection,
        last_connection_date
      });
    }

    const user = result.records[0].get('u').properties;
    res.json({
      message: check.records.length > 0 ? 'Utilisateur mis à jour avec succès' : 'Utilisateur créé avec succès',
      user: {
        ...user,
        age: user.age?.toNumber?.() ?? null,
        createdAt: user.createdAt?.toString()
      }
    });
  } catch (error: any) {
    if (error.code === 'Neo.ClientError.Schema.ConstraintValidationFailed') {
      res.status(400).json({ error: 'Un utilisateur avec cet email existe déjà' });
    } else {
      console.error('Erreur:', error);
      res.status(500).json({ error: 'Erreur lors de la création ou mise à jour de l\'utilisateur' });
    }
  } finally {
    await session.close();
  }
});

// POST /graph/tag création d'un tag
router.post("/tag", async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const { name, userEmail } = req.body;
    if (!name || !userEmail) {
      return res.status(400).json({ error: "tag et email de l'utilisateur requis" });
    }

    const result = await session.run(`
      MATCH (u:User {email: $userEmail})
      MERGE (t:Tag {name: $name})
      MERGE (u)-[:HAS_TAG]->(t)
      RETURN t
    `, { name, userEmail });

    if (result.records.length === 0) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const tag = result.records[0].get('t').properties;
    res.json({ message: "Tag lié à l'utilisateur", tag });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors de la création ou liaison du tag" });
  } finally {
    await session.close();
  }
});

// POST /graph/like - Un utilisateur like un autre utilisateur
router.post("/like", async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const { userEmail, likedEmail } = req.body;
    if (!userEmail || !likedEmail) {
      return res.status(400).json({ error: "userEmail et likedEmail requis" });
    }

    // Crée la relation LIKE
    await session.run(`
      MATCH (u1:User {email: $userEmail}), (u2:User {email: $likedEmail})
      MERGE (u1)-[l:LIKES]->(u2)
      SET l.likeDate = datetime()
    `, { userEmail, likedEmail });

    // Vérifie si l'autre utilisateur a aussi liké (match)
    const matchResult = await session.run(`
      MATCH (u1:User {email: $userEmail})-[:LIKES]->(u2:User {email: $likedEmail})
      MATCH (u2)-[:LIKES]->(u1)
      MERGE (u1)-[m:MATCHED_WITH]->(u2)
      SET m.matchDate = datetime()
      RETURN m
    `, { userEmail, likedEmail });

    const isMatch = matchResult.records.length > 0;
    res.json({
      message: isMatch ? "Match!" : "Like enregistré.",
      match: isMatch
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors du like/match" });
  } finally {
    await session.close();
  }
});

// POST /graph/dislike - Un utilisateur dislike un autre utilisateur
router.post("/dislike", async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const { userEmail, dislikedEmail } = req.body;
    if (!userEmail || !dislikedEmail) {
      return res.status(400).json({ error: "userEmail et dislikedEmail requis" });
    }

    await session.run(`
      MATCH (u1:User {email: $userEmail}), (u2:User {email: $dislikedEmail})
      MERGE (u1)-[d:DISLIKES]->(u2)
      SET d.dislikeDate = datetime()
    `, { userEmail, dislikedEmail });

    res.json({ message: "Dislike enregistré." });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors du dislike" });
  } finally {
    await session.close();
  }
});

// GET /graph/user/:email/liked - Récupérer les personnes likées par un utilisateur
router.get('/user/:email/liked', async (req: Request, res: Response) => {
  const session = getSession();
  
  try {
    const { email } = req.params;
    
    const result = await session.run(`
      MATCH (u:User {email: $email})-[:LIKES]->(liked:User)
      RETURN liked.firstName AS firstName,
             liked.lastName AS lastName,
             liked.gender AS gender,
             liked.age AS age,
             liked.biography AS biography,
             liked.location AS location
      ORDER BY liked.firstName
    `, { email });

    const likedUsers = result.records.map(record => ({
      firstName: record.get('firstName'),
      lastName: record.get('lastName'),
      gender: record.get('gender'),
      age: record.get('age')?.toNumber?.() ?? null,
      biography: record.get('biography'),
      location: record.get('location')
    }));

    res.json(likedUsers);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des amis' });
  } finally {
    await session.close();
  }
});

// GET /graph/stats - Statistiques globales (utilisateurs, likes, dislikes, matchs)
router.get('/stats', async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const result = await session.run(`
      CALL {
        MATCH (u:User)
        RETURN count(u) AS totalUsers
      }
      CALL {
        MATCH (:User)-[l:LIKES]->(:User)
        RETURN count(l) AS totalLikes
      }
      CALL {
        MATCH (:User)-[d:DISLIKES]->(:User)
        RETURN count(d) AS totalDislikes
      }
      CALL {
        MATCH (:User)-[m:MATCHED_WITH]->(:User)
        RETURN count(m) AS totalMatches
      }
      RETURN totalUsers, totalLikes, totalDislikes, totalMatches
    `);

    if (result.records.length === 0) {
      return res.json({
        totalUsers: 0,
        totalLikes: 0,
        totalDislikes: 0,
        totalMatches: 0
      });
    }

    const record = result.records[0];
    res.json({
      totalUsers: record.get('totalUsers').toNumber(),
      totalLikes: record.get('totalLikes').toNumber(),
      totalDislikes: record.get('totalDislikes').toNumber(),
      totalMatches: record.get('totalMatches').toNumber()
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
  } finally {
    await session.close();
  }
});

// GET /tag/:name/users récupération de tous les utilisateurs liés à un Tag
router.get("/tag/:name/users", async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const { name } = req.params;
    const result = await session.run(`
      MATCH (u:User)-[:HAS_TAG]->(t:Tag {name: $name})
      RETURN u
    `, { name });

    const users = result.records.map(record => record.get('u').properties);
    res.json(users);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs du tag" });
  } finally {
    await session.close();
  }
});

// GET /graph/users - Récupérer tous les utilisateurs 
router.get('/users', async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const result = await session.run(`MATCH (u:User) RETURN u`);
    const users = result.records.map(record => {
      const user = record.get('u').properties;
      return {
        ...user,
        age: user.age?.toNumber?.() ?? null,
        createdAt: user.createdAt?.toString()
      };
    });
    res.json(users);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  } finally {
    await session.close();
  }
});

// GET /graph/user/:email - Récupérer un utilisateur par email
router.get('/user/:email', async (req: Request, res: Response) => {
  const session = getSession();
  try {
    const { email } = req.params;
    const result = await session.run(`MATCH (u:User {email: $email}) RETURN u`, { email });
    if (result.records.length === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    const user = result.records[0].get('u').properties;
    res.json({
      ...user,
      age: user.age?.toNumber?.() ?? null,
      createdAt: user.createdAt?.toString()
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  } finally {
    await session.close();
  }
});

// DELETE /graph/user/:email - Supprimer un utilisateur et ses relations
router.delete('/user/:email', async (req: Request, res: Response) => {
  const session = getSession();
  
  try {
    const { email } = req.params;
    
    const result = await session.run(`
      MATCH (u:User {email: $email})
      DETACH DELETE u
      RETURN count(u) as deletedCount
    `, { email });
    
    const deletedCount = result.records[0].get('deletedCount').toNumber();
    
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    
    res.json({ 
      message: 'Utilisateur et ses relations supprimés avec succès',
      deletedCount
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  } finally {
    await session.close();
  }
});

export default router;



// GET /graph/shortest-path/:email1/:email2 - Plus court chemin entre deux utilisateur


// GET /graph/recommendations/:email - Recommandations de profils - la c'est un exemple avec des etudiants c'est pas la vrai
// router.get('/recommendations/:email', async (req: Request, res: Response) => {
//   const session = getSession();
  
//   try {
//     const { email } = req.params;
    
//     // Amis d'amis qui ne sont pas déjà amis
//     const result = await session.run(`
//       MATCH (s:Student {email: $email})-[:FRIEND_WITH]->(friend)-[:FRIEND_WITH]->(recommendation:Student)
//       WHERE NOT (s)-[:FRIEND_WITH]->(recommendation) AND s <> recommendation
//       WITH recommendation, count(*) as mutualFriends
      
//       // Bonus pour les étudiants dans les mêmes cours
//       OPTIONAL MATCH (s)-[:ENROLLED_IN]->(c:Course)<-[:ENROLLED_IN]-(recommendation)
//       WITH recommendation, mutualFriends, count(c) as sharedCourses
      
//       // Bonus pour les étudiants de la même ville
//       MATCH (s:Student {email: $email})
//       WITH recommendation, mutualFriends, sharedCourses, 
//            CASE WHEN s.city = recommendation.city THEN 1 ELSE 0 END as sameCity
      
//       RETURN recommendation.firstName as firstName,
//              recommendation.lastName as lastName,
//              recommendation.email as email,
//              recommendation.city as city,
//              mutualFriends,
//              sharedCourses,
//              sameCity,
//              (mutualFriends * 2 + sharedCourses * 3 + sameCity * 1) as score
//       ORDER BY score DESC, mutualFriends DESC
//       LIMIT 10
//     `, { email });
    
//     const recommendations = result.records.map(record => ({
//       firstName: record.get('firstName'),
//       lastName: record.get('lastName'),
//       email: record.get('email'),
//       city: record.get('city'),
//       mutualFriends: record.get('mutualFriends').toNumber(),
//       sharedCourses: record.get('sharedCourses').toNumber(),
//       sameCity: record.get('sameCity').toNumber() === 1,
//       score: record.get('score').toNumber()
//     }));
    
//     res.json(recommendations);
//   } catch (error) {
//     console.error('Erreur:', error);
//     res.status(500).json({ error: 'Erreur lors de la génération des recommandations' });
//   } finally {
//     await session.close();
//   }
// });