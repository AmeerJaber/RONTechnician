

const validation = (values) => {
    let errors={};

    if(!values.emil){
        errors.email="Email is required";
    }

}

export default validation;