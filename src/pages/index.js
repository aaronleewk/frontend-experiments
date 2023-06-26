
import { useMemo, useState, useEffect } from "react";
import Table from '../components/Table.js';
import Form from '../components/Form.js';
import GenericSelect from '../components/GenericSelect.js';
import NewForm2 from '../components/newForm2.js';
import { genericUseEffect, stockColumns } from '../utils/index.js';
import axios from "axios";

export default function OrderPage(){

    const columns = useMemo(() => stockColumns)

    const [asks, setAsks] = useState([]);
    genericUseEffect(() => axios.get("http://localhost:8083/asks"),setAsks, null, [])


    return (
        <div className="App">
          <span> These are the stocks on sale: </span>
          <Table columns={columns} data={asks} />
          <span> Make a limit order </span>
          <Form />
        </div>
    );

}
