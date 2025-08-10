import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Clock, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="text-xl font-semibold text-blue-700 flex items-center gap-2">
          <span className="text-2xl">🔊</span> EchoScript
        </div>
        <div className="space-x-4">
          {/* <a href="/features" className="text-sm text-gray-700">
            Features
          </a>
          <a href="/pricing" className="text-sm text-gray-700">
            Pricing
          </a> */}
          <a href="/login" className="text-sm text-gray-700">
            Sign In
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            <a href="/signup">Sign Up</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-20 px-6">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-4">🎙️</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Transcribe Audio to Text Instantly
          </h1>
          <p className="max-w-xl text-lg mb-6">
            EchoScript leverages cutting-edge AI to provide fast, accurate, and
            reliable audio transcriptions. Perfect for interviews, meetings,
            podcasts, and more.
          </p>
          <Button className="bg-white text-blue-600 font-semibold px-6 py-3 shadow-md">
            <a href="/transcription">Get Started for Free</a>
          </Button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-12">
          Why Choose EchoScript?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Clock className="mb-4 text-blue-500" />
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Get your transcriptions in minutes, not hours. Our AI is
                optimized for speed and efficiency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CheckCircle className="mb-4 text-green-500" />
              <h3 className="font-semibold text-lg mb-2">Highly Accurate</h3>
              <p className="text-gray-600">
                Benefit from industry-leading accuracy, ensuring your
                transcriptions are reliable and precise.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Lock className="mb-4 text-purple-500" />
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                We ensure your audio files and transcriptions are kept secure
                and confidential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-12">Simple Steps to Transcribe</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="text-blue-600 text-2xl font-bold mb-2">1</div>
            <h3 className="font-semibold text-lg mb-2">Upload Your Audio</h3>
            <p className="text-gray-600">
              Drag and drop or select your audio file (MP3, WAV, M4A, etc.).
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-2xl font-bold mb-2">2</div>
            <h3 className="font-semibold text-lg mb-2">AI Transcription</h3>
            <p className="text-gray-600">
              Our AI gets to work, converting your speech into accurate text.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-2xl font-bold mb-2">3</div>
            <h3 className="font-semibold text-lg mb-2">Review & Export</h3>
            <p className="text-gray-600">
              Edit your transcript if needed, then export in your preferred
              format (TXT, DOCX, SRT).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Audio?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of users who trust EchoScript for their transcription
          needs. Sign up today and experience the power of AI.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3">
          Start Transcribing Now ▶
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-2">EchoScript</h4>
            <p>
              Fast, accurate, and secure audio-to-text transcription powered by
              AI.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">
          © 2025 EchoScript. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
