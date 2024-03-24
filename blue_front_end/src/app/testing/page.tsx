import { readBlockData } from './call'

// Assuming propsInterface is defined elsewhere and includes a property for the table rows.
interface TableRow {
  companyName: string;
  score: number;
}

interface propsInterface {
  tableRows?: TableRow[];
}

// Default data to use if none is provided via props
const defaultInterface: propsInterface = {
  tableRows: [
    { companyName: "Acme Corporation", score: 96 },
    { companyName: "Example Corp", score: 84 },
    { companyName: "Mock Industries", score: 78 },
    { companyName: "Test Co.", score: 91 },
    { companyName: "Sample Ltd.", score: 89 },
  ],
};

export default function TestingPage({ tableRows = defaultInterface.tableRows }: propsInterface) {
    if (tableRows === undefined){
        tableRows = defaultInterface.tableRows;
    }
    //let check = readBlockData();
    //console.log(check)
    return (
        <div className="bg-blue-30/80 w-full min-h-screen py-12 sm:py-16">
          <div className="container px-4 py-12 md:py-16">
            <div className="flex flex-col gap-4">
              <div className="mx-auto grid w-full gap-4 sm:gap-6 items-start">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">Company Scores</h1>
                <div className="w-full overflow-auto rounded-lg border">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-1/2 sm:text-base dark:text-gray-400">
                          Company
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-1/2 sm:text-base dark:text-gray-400">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                  {tableRows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">{row.companyName}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}