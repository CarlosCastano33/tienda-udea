"use client"

import { User } from './columns'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from '@/components/ui/checkbox'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Import } from 'lucide-react'

interface DataTableProps<TData, TValue> {
  columns: User[]
  data: User[]
}

export function DataTable<User, TValue>({
  columns,
  data,
}: DataTableProps<User, TValue>) {

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
            <TableRow>
                {columns.map((column) => (
                    <TableHead key={column.accessorKey}>{column.header}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
        <TableBody>
          {data.length ? (
            data.map((row) => (
              <TableRow key={row.id}>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src={row.image || "https://github.com/shadcn.png"} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                            <Checkbox checked={row.enabled} />
                        </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}