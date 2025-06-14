import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { WaitingList } from "@/components/waiting-list";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                Founder Engineer
              </span>
            </div>
            <Button asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="mx-auto">
                Stop overthinking, start shipping 🚀
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Build things that
                <span className="text-blue-600 block">
                  actually makes money
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Here&apos;s my exact tech stack, process, and how I go from idea
                to software without getting stuck in tutorial hell.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#waitlist">
                  Show me how <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      {/* Solution Section */}
      {/* What You'll Get */}
      {/* Reality Check */}

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
              <WaitingList />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; 2024 Founder Engineer. Built with the same stack I&apos;m
            teaching you.
          </p>
        </div>
      </footer>
    </div>
  );
}
