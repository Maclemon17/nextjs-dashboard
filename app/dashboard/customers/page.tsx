import { fetchFormatedCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Customers',
}

export default async function Page() {
  const customers = await fetchFormatedCustomers();

  return (
    // <Suspense fallback={""}>
    <CustomersTable customers={customers} />
    // </Suspense>
  )

}