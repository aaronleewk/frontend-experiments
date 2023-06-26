import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'



// From https://blog.logrocket.com/react-table-complete-guide/

export default function Table({ columns, data }) {

  const table = useReactTable({ 
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
    });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(
                header.column.columnDef.header,
                header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
        ))}
      </tbody>
    </table>
  );
}