import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Issue {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function getIssues(): Promise<Issue[]> {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");

  return result.json();
}

export default async function Home() {
  const issues = await getIssues();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {issues.map((issue) => (
          <Card key={issue.postId} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{issue.name}</CardTitle>
              <CardDescription>{issue.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <CardDescription>{issue.body}</CardDescription>
            </CardContent>
            <CardFooter className="grid grid-cols-3 gap-2">
              <button>
                <p>Post ID: {issue.postId}</p>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
