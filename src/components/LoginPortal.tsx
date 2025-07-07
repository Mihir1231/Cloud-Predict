import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPortal = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        // Optional: redirect or set user context
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Server error. Please try again later.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 hover-lift">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse-glow">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Access Portal</h2>
              <p className="text-sky-300">Authorized Person only</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-300 mb-2 block">
                  Email / Username
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="bg-black/20 border-sky-400/30 text-white placeholder-gray-400 focus:border-sky-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-300 mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="bg-black/20 border-sky-400/30 text-white placeholder-gray-400 focus:border-sky-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 group"
              >
                <ArrowRight className="mr-2 w-4 h-4" />
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPortal;
