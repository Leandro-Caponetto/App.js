const Table = ({ data }) => {
    return (
      <div>
        <ul className="table ">
          <li>
            <h3 >CATEGORIA</h3>
            
          </li>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.category}</p>
              
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Table;