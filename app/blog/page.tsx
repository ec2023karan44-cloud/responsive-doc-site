'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const blogPosts = [
  {
    id: 1,
    slug: "seo-strategies-2024",
    title: "10 Proven SEO Strategies to Dominate Search Rankings in 2024",
    excerpt: "Discover the most effective SEO techniques that top-ranking websites use to maintain their position and drive organic traffic consistently.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    category: "SEO",
    author: "Rahul Mehta",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "social-media-engagement",
    title: "How to Triple Your Social Media Engagement in 30 Days",
    excerpt: "Learn the secrets behind viral content and discover actionable strategies to boost your social media presence dramatically.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "Social Media",
    author: "Ananya Iyer",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 3,
    slug: "ppc-optimization-guide",
    title: "The Ultimate Guide to PPC Campaign Optimization",
    excerpt: "Maximize your ROI with these expert tips on Google Ads and Facebook Ads optimization that reduce costs and increase conversions.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "PPC",
    author: "Vikram Singh",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "content-marketing-roi",
    title: "Content Marketing ROI: Measuring What Actually Matters",
    excerpt: "Stop guessing and start measuring. Learn which metrics truly indicate content marketing success and how to track them effectively.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    category: "Content",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "local-seo-small-business",
    title: "Local SEO Mastery: A Complete Guide for Small Businesses",
    excerpt: "Dominate your local market with these proven local SEO strategies. Get found by customers in your area when they need you most.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
    category: "Local SEO",
    author: "Arjun Reddy",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    date: "Jan 5, 2024",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "email-marketing-automation",
    title: "Email Marketing Automation: From Beginner to Pro",
    excerpt: "Set up powerful email sequences that nurture leads and convert customers on autopilot. A step-by-step implementation guide.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
    category: "Email Marketing",
    author: "Neha Gupta",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    date: "Jan 3, 2024",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "SEO", "Social Media", "PPC", "Content", "Local SEO", "Email Marketing"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory !== "All");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg-subtle opacity-50" />
          
          <div className="container relative z-10">
            <ScrollReveal className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
                Our Blog
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Digital Marketing <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Stay ahead of the curve with expert tips, industry trends, and actionable strategies
                to grow your business online.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-bg text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === "All" && searchQuery === "" && (
          <section className="py-12 lg:py-16">
            <div className="container">
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <ScrollReveal key={post.id}>
                    <article className="group bg-card rounded-2xl overflow-hidden border border-border card-hover">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="gradient-bg text-primary-foreground">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="text-primary gap-1">
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            
            {regularPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {regularPosts.map((post) => (
                  <StaggerItem key={post.id}>
                    <article className="group bg-card rounded-xl overflow-hidden border border-border card-hover h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                        <div className="flex items-center gap-2">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="gap-2">
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-soft-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Subscribe to Our <span className="gradient-text">Newsletter</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get the latest digital marketing tips, strategies, and industry insights delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 bg-secondary/50"
                  />
                  <Button className="h-12 px-8 gradient-bg text-primary-foreground">
                    Subscribe
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
