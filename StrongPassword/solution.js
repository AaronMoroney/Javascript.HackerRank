function minimumNumber(n, password) {
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let digit = /[0-9]/;
    let specialChar = /[!@#$%^&*()+-]/;
    let additionalCharCount = 0;

    if(!lowercase.test(password)) additionalCharCount++;
    if(!uppercase.test(password)) additionalCharCount++;
    if(!digit.test(password)) additionalCharCount++;
    if(!specialChar.test(password)) additionalCharCount++;
    
    return Math.max(additionalCharCount, 6 - n);
}
