function FunctionalExample(props){
    return(
        <div>
            {
                props.employees.map((employee) => (
                    <div>
                        <p>Name from FunctionalExample  :{employee.name}</p>
                        <p>Age from FunctionalExample   : {employee.age}</p>
                    </div>
                ))
             }
            
        </div>
    )
}

export default FunctionalExample

//"this." is not required in FuctionalComponent