import { useEffect, useState } from 'react';
import { fetchTable } from '../../../api/fetchTable.api';
import { TableRow } from '../../../ui/Table/types/TableRow.type';

export function useFetchTable(applicationId: string) {
  const [data, setData] = useState<TableRow[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (applicationId)
        try {
          const fetchedData = await fetchTable(applicationId);
          setData(fetchedData);
        } catch (error) {
          console.error(error);
        }
    };
    fetchData();
  }, [applicationId]);

  return data;
}
