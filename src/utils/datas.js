import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper();


export const stockColumns = [

    columnHelper.accessor(obj => `${obj.id} ${obj.stockName}`, {id: "Name"}),
    columnHelper.accessor(obj => `${obj.amount} for ${obj.price}`, {id: "Qty"}),

  ]