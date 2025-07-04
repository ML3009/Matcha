import { getSession } from '../config/neo4j';

const demoData = {
  users: [
    { username: 'alice', firstName: 'Alice', lastName: 'Dupont', email: 'alice@mail.com', password: 'pass1', gender: 'F', sexual_preference: 'M', age: 25, biography: 'Fan de randonnée', location: 'Paris' },
    { username: 'bob', firstName: 'Bob', lastName: 'Martin', email: 'bob@mail.com', password: 'pass2', gender: 'M', sexual_preference: 'F', age: 27, biography: 'Aime les fleurs', location: 'Lyon' },
    { username: 'carla', firstName: 'Carla', lastName: 'Durand', email: 'carla@mail.com', password: 'pass3', gender: 'F', sexual_preference: 'M', age: 24, biography: 'Epicurienne', location: 'Marseille' },
    { username: 'david', firstName: 'David', lastName: 'Moreau', email: 'david@mail.com', password: 'pass4', gender: 'M', sexual_preference: 'F', age: 28, biography: 'Sportif et sociable', location: 'Toulouse' },
    { username: 'emma', firstName: 'Emma', lastName: 'Petit', email: 'emma@mail.com', password: 'pass5', gender: 'F', sexual_preference: 'F', age: 26, biography: 'Aime la musique', location: 'Nice' }
  ],
  tags: [
    { name: 'Sport' },
    { name: 'Voyage' },
    { name: 'Cuisine' },
    { name: 'Lecture' },
    { name: 'Musique' }
  ],
  userTags: [
    { userEmail: 'alice@mail.com', tagName: 'Voyage' },
    { userEmail: 'alice@mail.com', tagName: 'Lecture' },
    { userEmail: 'bob@mail.com', tagName: 'Sport' },
    { userEmail: 'carla@mail.com', tagName: 'Cuisine' },
    { userEmail: 'emma@mail.com', tagName: 'Musique' },
    { userEmail: 'david@mail.com', tagName: 'Sport' },
    { userEmail: 'emma@mail.com', tagName: 'Voyage' }
  ],
  likes: [
    { from: 'alice@mail.com', to: 'bob@mail.com' },
    { from: 'bob@mail.com', to: 'alice@mail.com' }, // match
    { from: 'carla@mail.com', to: 'david@mail.com' },
    { from: 'emma@mail.com', to: 'carla@mail.com' }
  ],
  dislikes: [
    { from: 'david@mail.com', to: 'emma@mail.com' }
  ],
  matches: [
    { user1: 'alice@mail.com', user2: 'bob@mail.com' } // match explicite (en plus du like croisé)
  ]
};

export const initializeDemoData = async () => {
  try {
    console.log('Initialisation des données de démonstration (utilisateurs, tags, likes, dislikes, matchs)...');
    const session = getSession();
    await session.run('MATCH (n) DETACH DELETE n');

    // Création des utilisateurs
    for (const user of demoData.users) {
      await session.run(`
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
          createdAt: datetime()
        })
      `, user);
    }

    // Création des tags
    for (const tag of demoData.tags) {
      await session.run(`
        CREATE (t:Tag { name: $name })
      `, tag);
    }

    // Lien User-Tag
    for (const userTag of demoData.userTags) {
      await session.run(`
        MATCH (u:User {email: $userEmail})
        MATCH (t:Tag {name: $tagName})
        MERGE (u)-[:HAS_TAG]->(t)
      `, userTag);
    }

    // Likes
    for (const like of demoData.likes) {
      await session.run(`
        MATCH (u1:User {email: $from})
        MATCH (u2:User {email: $to})
        MERGE (u1)-[l:LIKES]->(u2)
        SET l.likeDate = datetime()
      `, like);
    }

    // Dislikes
    for (const dislike of demoData.dislikes) {
      await session.run(`
        MATCH (u1:User {email: $from})
        MATCH (u2:User {email: $to})
        MERGE (u1)-[d:DISLIKES]->(u2)
        SET d.dislikeDate = datetime()
      `, dislike);
    }

    // Matchs explicites (en plus des likes croisés)
    for (const match of demoData.matches) {
      await session.run(`
        MATCH (u1:User {email: $user1})
        MATCH (u2:User {email: $user2})
        MERGE (u1)-[m:MATCHED_WITH]->(u2)
        SET m.matchDate = datetime()
      `, match);
    }

    // Statistiques
    const stats = await session.run(`
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
    const record = stats.records[0];
    console.log('Données de démonstration créées avec succès !');
    console.log(`   - Utilisateurs: ${record.get('totalUsers').toNumber()}`);
    console.log(`   - Likes: ${record.get('totalLikes').toNumber()}`);
    console.log(`   - Dislikes: ${record.get('totalDislikes').toNumber()}`);
    console.log(`   - Matchs: ${record.get('totalMatches').toNumber()}`);
    await session.close();
  } catch (error) {
    console.error('Erreur lors de l\'initialisation:', error);
    throw error;
  }
};

