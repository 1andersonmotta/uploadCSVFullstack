const validateCSVFormat = (file: any): boolean => {
    if (file.mimetype !== 'text/csv') {
        return false;
    }
    return true;
};

export default validateCSVFormat;