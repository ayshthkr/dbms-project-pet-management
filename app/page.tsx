import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Manage Your Pets with Ease
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Keep track of your furry friends' health, activities, and more
              with our intuitive dashboard.
            </p>
            <Link href="/sign-in">
              <Button size="lg" className="mr-4">
                Start Now
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src="/home.png"
              alt="Happy pets"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-24" id="features">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Features to Love
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/health-tracking.png"
                  alt="Activity tracker"
                  width={400}
                  height={200}
                  className="mb-4 rounded w-full"
                />
                <h4 className="text-xl font-semibold mb-2">Health Tracking</h4>
                <p className="text-gray-600">
                  Monitor your pet's health and get timely reminders for
                  check-ups and medications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/activity-log.png"
                  alt="Activity tracker"
                  width={400}
                  height={200}
                  className="mb-4 rounded w-full"
                />
                <h4 className="text-xl font-semibold mb-2">Activity Log</h4>
                <p className="text-gray-600">
                  Keep a record of walks, playtime, and other activities to
                  ensure your pet stays active.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/community.png"
                  alt="Pet community"
                  width={400}
                  height={200}
                  className="mb-4 rounded w-full"
                />
                <h4 className="text-xl font-semibold mb-2">Pet Community</h4>
                <p className="text-gray-600">
                  Connect with other pet owners, share tips, and find
                  pet-friendly events near you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join thousands of happy pet owners
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Start managing your pet's life with ease today!
          </p>
          <Link href="/sign-in">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
