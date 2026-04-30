import { columns, User } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      email: "john@example.com",
      image: "/avatars/1.png",
      deleted: false,
      enabled: true,
      role: "USER",
      createdAt: new Date(),
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
        <div className="flex flex-row justify-arround my-3">
            <div>
                <h2 className="text-2xl font-bold">Users</h2>
                <p className="text-muted-foreground"> Manage your users and their permissions.</p>
            </div>
            <Button className='ml-auto'>Add User</Button>
        </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}