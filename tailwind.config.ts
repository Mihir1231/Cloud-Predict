import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Weather satellite theme colors
				satellite: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},
				weather: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'satellite-orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(120px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(120px) rotate(-360deg)'
					}
				},
				'weather-drift': {
					'0%': {
						transform: 'translateX(-100px) translateY(0px)'
					},
					'25%': {
						transform: 'translateX(0px) translateY(-20px)'
					},
					'50%': {
						transform: 'translateX(100px) translateY(0px)'
					},
					'75%': {
						transform: 'translateX(50px) translateY(20px)'
					},
					'100%': {
						transform: 'translateX(-100px) translateY(0px)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)'
					}
				},
				// Enhanced cloud motion animations
				'cloud-motion': {
					'0%': {
						transform: 'translateX(-50px) translateY(0px) scale(0.9)',
						opacity: '0.6'
					},
					'25%': {
						transform: 'translateX(25px) translateY(-15px) scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateX(0px) translateY(10px) scale(1.1)',
						opacity: '1'
					},
					'75%': {
						transform: 'translateX(-25px) translateY(-5px) scale(1)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'translateX(-50px) translateY(0px) scale(0.9)',
						opacity: '0.6'
					}
				},
				'cloud-drift-slow': {
					'0%': {
						transform: 'translateX(-200px) translateY(0px)',
						opacity: '0'
					},
					'10%': {
						opacity: '0.6'
					},
					'90%': {
						opacity: '0.6'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 200px)) translateY(-30px)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'satellite-orbit': 'satellite-orbit 20s linear infinite',
				'weather-drift': 'weather-drift 25s linear infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				// Enhanced cloud motion animations
				'cloud-motion': 'cloud-motion 45s ease-in-out infinite',
				'cloud-drift-slow': 'cloud-drift-slow 60s linear infinite',
				'cloud-drift-medium': 'cloud-drift-slow 40s linear infinite',
				'cloud-drift-fast': 'cloud-drift-slow 25s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-satellite': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
				'gradient-weather': 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
				'cloud-prediction': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
			},
			// Performance optimizations
			willChange: {
				'transform-opacity': 'transform, opacity',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
