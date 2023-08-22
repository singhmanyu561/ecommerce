import React, { useState } from 'react';

const Dummy = () => {

    const [val,setVal] = useState('');
    const [searchVal,setSearchVal] = useState('');

    const content=[{
        'recipeName' : 'Oatmeal with Peanut Butter',
        'index' : 1,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-oatmeal-with-eapnut-butter-and-banana-recipe.jpg?resize=800,586&quality=82&strip=all',
        'nutrition' : 'NUTRITION: 320 calories, 10 g fat (1 g saturated), 17 g sugar',
        'list' : ['4 1/2 cups water','2 cups rolled oats','Pinch of salt','2 bananas, sliced','2 Tbsp peanut butter','1/4 cup chopped almonds','2 Tbsp agave syrup'],
        'preparation' : [`In a medium saucepan, bring the water to a boil. Turn the heat down to low and add the oatmeal and salt. 
                Cook, stirring occasionally, for about 5 minutes, until the oats are tender and have absorbed most of the liquid.`,
                `Add the bananas, peanut butter, almonds, and agave syrup and stir to incorporate evenly. 
                If the oatmeal is too thick, add a splash of milk.`,`Divide the hash among four plates or bowls. Top each serving with a fried egg and Tabasco.`]
        
    },
    {
        'recipeName' : 'Breakfast Hash',
         'index' : 2,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/breakfast-hash-sweet-potato-chicken-sausage.jpg?resize=800,586&quality=82&strip=all',
        'nutrition' : 'NUTRITION: 230 calories, 11 g fat (4.5 g saturated), 290 mg sodium',
        'list' : ['2 medium sweet potatoes, peeled and cut into 1⁄4" cubes','1⁄2 Tbsp olive oil','2 links uncooked chicken sausage (chicken-apple works nicely)',
        '1 medium yellow onion, chopped','1 red bell pepper, chopped','1⁄8 tsp cayenne pepper','Salt and black pepper to taste','4 eggs, fried sunny-side up'],
    
        'preparation' : ['Place the potatoes in a medium saucepan and cover with water. Bring to a boil and cook until fork tender, about 10 minutes. Drain.',
                `Heat the oil in a large cast-iron or nonstick skillet over medium heat. Cut open the sausage casing and squeeze the meat directly into the pan, discarding the casing. 
                Sauté for 4 to 5 minutes, until the meat is cooked through. Transfer to a plate.`,`In the same pan, add the reserved sweet potatoes, the onion, and red pepper. Cook until the potatoes and vegetables are browned,
                about 7 minutes. Return the sausage to the pan, season with the cayenne and salt and pepper, and stir to mix.`]
    },
    {
        'recipeName' : 'Black Bean Omelet',
        'index' : 3,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-black-bean-omelet.jpg?resize=800,586&quality=82&strip=all',
        'nutrition' : 'NUTRITION: 330 calories, 8 g fat (6 g saturated), 480 mg sodium',
        'list': ['1 can (14–16oz) black beans, drained','Juice of 1 lime','1⁄4 tsp cumin','Hot sauce','8 eggs','1⁄2 cup feta cheese, plus more for serving',
        'Salt and black pepper to taste','Sliced avocado (optional)'],
        'preparation' : ['Pulse the black beans, lime juice, cumin, and a few shakes of hot sauce in a food processor until it has the consistency of refried beans, adding a bit of water to help if necessary.',
                'Coat a small nonstick pan with nonstick cooking spray or a bit of butter or olive oil and heat over medium heat','Crack two eggs into a bowl and beat with a bit of salt and pepper.',
                'Add the eggs to the pan, then use a spatula to stir and then lift the cooked egg on the bottom to allow raw egg to slide under.','When the eggs have all but set, spoon a quarter of the black bean mixture and 2 tablespoons feta down the middle of the omelet.',
                'Use the spatula to fold over a third of the egg to cover the mixture in the center, then carefully slide the omelet onto a plate, using the spatula flip it over at the last second to form one fully rolled omelet.',
                'Repeat with the remaining ingredients to make four omelets. Garnish with pico de gallo, avocado slices if you like, and bit more crumbled feta.']
    },
    {
        'recipeName' : 'Plant-Based Matcha Mint Smoothie',
        'index' : 4,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/matcha-mint-smoothie.jpg?quality=82&strip=1&w=800',
        'nutrition' : 'NUTRITION: 220 calories, 0.12 g protien, 0.48 g carbohydrates',
        'list': ['1 frozen banana, broken into chunks','1/2 cup packed baby spinach','2 tsp wildflower honey','1 bunch fresh mint leaves','1 tsp matcha powder',
        '3/4 cup water','1 tsp wheatgrass powder'],
        'preparation' : ['Combine all the ingredients in a blender. Blend on low, then finish on high for 1 to 2 minutes, until smooth.']
    },
    {
        'recipeName' : 'Blueberry Smoothie Bowl Recipe',
        'index' : 5,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/07/acai-blueberry-smoothie-bowl.jpg?quality=82&strip=1&w=800',
        'nutrition' : 'NUTRITION: 331 calories, 18 g fat (5 g saturated), 160 mg sodium, 5 g fiber, 29 g sugar, 9 g protein',
        'list': ['3 1/2 oz frozen unsweetened pure acai fruit puree','1/2 cup frozen mixed berries','10 Tbsp plain whole milk yogurt, divided','1/4 cup unsweetened vanilla almond milk','2 tsp honey',
        '2 Tbsp fresh blueberries','1/2 tsp chia seeds'],
        'preparation' : ['In a blender, combine acai fruit puree, frozen berries, 8 tablespoons of the yogurt, the almond milk, and honey. Cover and blend until smooth.',
                'Pour smoothie into a bowl. Top with remaining 2 tablespoons yogurt, the fresh blueberries, pecans, and chia seeds.']
    },
    {
        'recipeName' : 'Artichoke Feta Quiche',
        'index' : 6,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/vegetarian-artichoke-feta-quiche.jpg?resize=800,586&quality=82&strip=all',
        'nutrition' : 'NUTRITION: 250 calories, 14 g fat (5 g saturated), 890 mg sodium',
        'list': ['3 extra large eggs','1⁄2 can (14 oz) artichoke hearts, drained and roughly chopped','1⁄4 cup crumbled feta cheese','2 Tbsp chopped sun-dried tomatoes','2 links cooked turkey or chicken sausage',
        '3⁄4 tsp kosher salt and black pepper','1 frozen pie crust'],
        'preparation' : ['Preheat the oven to 350°F.Whisk the eggs until frothy, then stir in the milk, artichoke hearts, feta, tomatoes, sausage, salt, and pepper.',
                'Pour into the crust.','Place in the oven and bake for 45 minutes or until the eggs are completely set (a toothpick inserted into the middle will come out clean) and the top is lightly golden brown.',
                'Cool for at least 5 minutes before slicing and serving.']
    },
    {
        'recipeName' : 'Sunrise Sandwich',
        'index' : 7,
        'recipePic' : 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/sunrise-sandwich.jpg?quality=82&strip=1&w=800',
        'nutrition' : 'NUTRITION: 380 calories, 13 g fat (3.5 g saturated),  986 mg sodium',
        'list': ['1 extra large eggs','1 tsp canola or olive oil','2 oz smoked turkey breast ','1 slice American, Cheddar, or pepper Jack cheese','1 thick tomato slice',
        '3⁄4 tsp salt and black pepper','1 whole-wheat English muffin, split and toasted','1 Tbsp guacamole, either homemade or Wholly Guacamole'],
        'preparation' : ['Heat the oil in a small nonstick skillet or sauté pan over medium heat until hot.',
                'Add the egg and gently fry until the white is set but the yolk is still runny, about 5 minutes.','Season with salt and pepper to your liking.',
                'Place the turkey on a plate, top with the cheese, and microwave for 30 to 45 seconds, until the turkey is hot and the cheese is melted.',
                `Place the tomato on the bottom half of the English muffin, and season with salt and pepper. 
                Top with the turkey and egg. Slather the guacamole on the top half of the muffin, and crown the sandwich.`]
    }];

    const handleEvent = (e) =>{
        setVal(() => (e.target.value).trim())
        setSearchVal(()=>e.target.value)
    }
     
    const handleClick = (e) =>{
        e.preventDefault()
        setSearchVal(()=>e.target.value)
    }
    
    return(
        <>
        <input type="text" placeholder='type to search' onChange={handleEvent}  style={{marginLeft:'20%'}} value={val}/>
        <button onClick={handleClick}>search</button>
        {
            content.map((data)=>(
                <>
                    {
                        data.recipeName.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()) &&
                        <div>
                            {data.recipeName}
                        </div>
                    }
                </>
             )
            )
        }
        </>
    );
}

export default Dummy;