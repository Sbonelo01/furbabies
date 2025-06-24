
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Play, Youtube, Mic, PawPrint, Star } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const petFoodProducts = [
    {
      id: 1,
      name: "Premium Puppy Blend",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop",
      description: "Nutrient-rich formula for growing puppies",
      rating: 4.8
    },
    {
      id: 2,
      name: "Gourmet Cat Treats",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      description: "Delicious salmon-flavored treats cats love",
      rating: 4.9
    },
    {
      id: 3,
      name: "Senior Dog Formula",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      description: "Specially formulated for older dogs' needs",
      rating: 4.7
    },
    {
      id: 4,
      name: "Natural Cat Food",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&h=300&fit=crop",
      description: "All-natural ingredients for healthy cats",
      rating: 4.6
    }
  ];

  const petContent = [
    {
      id: 1,
      title: "5 Tips for First-Time Pet Parents",
      excerpt: "Essential advice for new pet owners to ensure a smooth transition",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop",
      category: "Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Your Cat's Body Language",
      excerpt: "Learn to decode what your feline friend is trying to tell you",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=250&fit=crop",
      category: "Behavior",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Best Dog Parks in Your City",
      excerpt: "Discover amazing spots to let your pup run free and socialize",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop",
      category: "Lifestyle",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/7560972f-09c0-4a59-9351-2374addd8d86.png" 
                alt="Furbabies Podcast Logo" 
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-gray-800">Furbabies Podcast</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#shop" className="text-gray-700 hover:text-orange-600 transition-colors">Shop</a>
              <a href="#content" className="text-gray-700 hover:text-orange-600 transition-colors">Content</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cart.length})
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to the <span className="text-orange-600">Furbabies</span> Family!
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us for heartwarming stories, expert pet advice, and everything you need to give your furry friends the best life possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                <Youtube className="h-5 w-5 mr-2" />
                Watch on YouTube
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                <Mic className="h-5 w-5 mr-2" />
                Latest Episode
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Food Shop Section */}
      <section id="shop" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Premium Pet Food</h3>
            <p className="text-xl text-gray-600">Nutrition your pets deserve, recommended by our experts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {petFoodProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2 bg-orange-600">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {product.rating}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">R{product.price}</span>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Content Section */}
      <section id="content" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Pet Care Content</h3>
            <p className="text-xl text-gray-600">Expert advice and heartwarming stories from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {petContent.map((article) => (
              <Card key={article.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-600">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-orange-600 transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-8">About Furbabies Podcast</h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <PawPrint className="h-16 w-16 text-orange-600 mx-auto mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Furbabies Podcast is your go-to source for everything pet-related. We bring together pet experts, 
                veterinarians, and passionate pet parents to share stories, advice, and the latest in pet care. 
                Whether you're a first-time pet owner or a seasoned pro, our community is here to support you 
                and your furry family members.
              </p>
              <div className="flex justify-center items-center space-x-8 text-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">1K+</div>
                  <div className="text-sm">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-sm">Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">2 Years</div>
                  <div className="text-sm">On Air</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/7560972f-09c0-4a59-9351-2374addd8d86.png" 
                alt="Furbabies Podcast Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Your trusted companion in the pet parenting journey.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#content" className="hover:text-white transition-colors">Content</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: hello@furbabiespodcast.com<br />
                For business inquiries and collaborations
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Furbabies Podcast. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
