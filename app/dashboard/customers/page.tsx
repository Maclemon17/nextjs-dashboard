import { fetchCustomers, fetchFormatedCustomers } from "@/app/lib/data"
// import { customers } from "@/app/lib/placeholder-data"
import CustomersTable from "@/app/ui/customers/table"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'Customers',
}

export default async function Page() {
  // const customers = await fetchCustomers();
  const customers = await fetchFormatedCustomers();
  console.log("customers - ", customers);

  return (
    <Suspense fallback={""}>
      <h1>customer</h1>
      <CustomersTable customers={customers} />
    </Suspense>
  )

}