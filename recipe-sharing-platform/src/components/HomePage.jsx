import React, { useState, useEffect } from 'react';
import { Container, Card, Image } from 'tailwindcss-react'; // Assuming Tailwind configured

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json'); // Replace with your data source
      const data = await response.json();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <Container className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Our Delicious Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="group hover:shadow-lg transition duration-300 ease-in-out">
            <Image src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;