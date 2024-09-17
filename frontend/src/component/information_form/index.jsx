import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ErrorMessage } from "@hookform/error-message"
import InputField from '../input_field'
import RegisterSubmitButton from '../submit_button'

const tags = [
    { tag: '🌿 Nature Lover', description: 'Loves the outdoors and feels at home in the wilderness.' },
    { tag: '🌟 Dreamer', description: 'Always chasing big ideas and imaginative adventures.' },
    { tag: '🔥 Passionate', description: 'Lives life with intensity and emotion.' },
    { tag: '💧 Calm', description: 'Brings peace and tranquility to those around them.' },
    { tag: '🌞 Optimist', description: 'Always sees the bright side of life.' },
    { tag: '🐾 Animal Friend', description: 'Deeply connected to animals, caring and nurturing.' },
    { tag: '🌊 Free Spirit', description: 'Goes with the flow, enjoys spontaneity and adventure.' },
    { tag: '🍂 Old Soul', description: 'Wise beyond their years, enjoys the classics.' },
    { tag: '🍃 Adventurer', description: 'Always looking for new experiences and thrills.' },
    { tag: '🌺 Flirty', description: 'Fun, charming, and loves a playful connection.' },
    { tag: '🌵 Independent', description: 'Fiercely self-sufficient and enjoys time alone.' },
    { tag: '🌻 Warm-Hearted', description: 'Caring and compassionate, always helping others.' },
    { tag: '🍀 Lucky Charm', description: 'Brings good luck wherever they go, optimistic and positive.' },
    { tag: '🌙 Night Owl', description: 'More alive when the moon rises, loves late-night chats.' },
    { tag: '🍓 Sweetheart', description: 'Kind and affectionate, full of love to give.' },
    { tag: '🌈 Colorful', description: 'Full of personality, vibrant, and fun to be around.' },
    { tag: '🥀 Mysterious', description: 'Intriguing and keeps things interesting, not easy to read.' },
    { tag: '🦋 Transformation', description: 'Constantly growing and evolving.' },
    { tag: '🌹 Romantic', description: 'Believes in love stories, flowers, and grand gestures.' },
    { tag: '🍒 Playful', description: 'Lighthearted and loves to have fun.' },
    { tag: '🍂 Grounded', description: 'Practical and down-to-earth, values stability.' },
    { tag: '🌻 Sunny Disposition', description: 'Always smiling, spreads joy to others.' },
    { tag: '🌾 Nurturer', description: 'Loves taking care of others, naturally protective.' },
    { tag: '🍇 Cultured', description: 'Appreciates the finer things, like art, music, and travel.' },
    { tag: '🌲 Explorer', description: 'Loves travel and discovering new places and cultures.' },
    { tag: '🌠 Stargazer', description: 'Finds wonder in the world, curious and thoughtful.' },
    { tag: '🌸 Elegant', description: 'Graceful and sophisticated, has a refined sense of style.' },
    { tag: '🍑 Sassy', description: 'Confident, bold, and doesn’t shy away from a challenge.' },
    { tag: '🌼 Cheerful', description: 'Always upbeat and bringing good vibes to every room.' },
    { tag: '🌪️ Wild Card', description: 'Unpredictable, adventurous, and always full of surprises.' },
    { tag: '🍄 Quirky', description: 'Has a unique, playful perspective on life.' },
    { tag: '🍁 Calm Breeze', description: 'Brings a sense of ease and relaxation.' },
    { tag: '🌷 Soft-Hearted', description: 'Gentle and kind, very emotionally sensitive.' },
    { tag: '🍉 Fun-Loving', description: 'Enjoys the lighter side of life, loves to laugh.' },
    { tag: '🌾 Traditional', description: 'Values old-school romance and long-term commitment.' },
    { tag: '🐚 Ocean Lover', description: 'Drawn to the sea, loves beach life and coastal vibes.' },
    { tag: '🍊 Energetic', description: 'Full of life and always on the move.' },
    { tag: '🌱 Minimalist', description: 'Values simplicity and a clutter-free life.' },
    { tag: '🦄 Unique', description: 'Marches to the beat of their own drum, totally original.' },
    { tag: '🌈 Open-Minded', description: 'Accepting of all viewpoints, loves exploring new ideas.' }
];

function InformationForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        console.log("user data", data);
        navigate('/wilderness');
    }
    return (
        <div>
            <h1>Information Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.username && <p>ⓘ This field is required</p>}
                <InputField 
                            label="Description"
                            type="text"
                            name="description"
                            placeholder="create a description"
                            register={register}
                            validationRules={{ 
                                required: "A description is require.",
                            }}
                        />
                <label>
                    <h3> Choose your bloom </h3>
                        <button value="Rose">Rose</button>
                        <button value="Sunflower">Sunflower</button>
                        <button value="Lotus">Lotus</button>
                </label>
                <label>
                    <h3> Choose the bloom you wanna see </h3>
                        <button value="Rose">Rose</button>
                        <button value="Sunflower">Sunflower</button>
                        <button value="Lotus">Lotus</button>
                </label>
                <label>
                    <h3>The Tree of Time </h3>
                    <select>
                        <option value="Sapling"> Sapling - 20 and less </option>
                        <option value="Growing Branch"> Growing Branch - 20 to 30</option>
                        <option value="Mature Leaf ">Mature Leaf - 30 to 40</option>
                        <option value=" Autumn Leaf "> Autumn Leaf - 40 and more </option>
                    </select>
                </label>
                <label>
                    <h3> Choose your tag </h3>
                    <div>
                        {tags.map((tag) => (
                            <div key={tag.tag}>
                                <input 
                                    type="checkbox" 
                                    id={tag.tag} 
                                    value={tag.tag} 
                                    {...register("tags", { required: "Please select at least one tag" })}
                                />
                                <label htmlFor={tag.tag}>{tag.tag}</label>
                            </div>
                        ))}
                    </div>
                    {errors.tags && <p>ⓘ {errors.tags.message}</p>}
                </label>
                <label>
                    <h3> Pictures </h3>
                    {[...Array(5)].map((_, index) => (
                        <div key={index}>
                            <input 
                                type="file" 
                                name={`picture${index + 1}`} 
                                accept="image/*" 
                                {...register(`picture${index + 1}`, { 
                                    required: index === 0 ? "Please upload at least one picture" : false
                                })} 
                            />
                            {errors[`picture${index + 1}`] && <p>ⓘ Please upload at least one picture</p>}
                        </div>
                    ))}
                </label>
                <label>
                    <h3>Allow us to use your location</h3>
                    <input 
                        type="radio" 
                        id="location_true" 
                        value="true" 
                        {...register("location")}
                        name="location"
                    />
                        <label htmlFor="location_true">Yes, I allow Bloom to use my location</label>        
                    <input 
                        type="radio" 
                        id="location_false" 
                        value="fasle" 
                        {...register("location")}
                        name="location"
                    />
                    <label htmlFor="location_false">No, I prefer not to share my location</label>

                </label>
                <RegisterSubmitButton />
            </form>
        </div>
    );
}

export default InformationForm;