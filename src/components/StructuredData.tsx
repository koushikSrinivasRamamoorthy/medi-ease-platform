import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: object | object[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  const dataArray = Array.isArray(data) ? data : [data];
  
  return (
    <Helmet>
      {dataArray.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};
