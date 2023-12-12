const validatePassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
      return { valid: false, message: 'Passwords do not match.' };
  }
  if (password.length < 6) {
      return { valid: false, message: 'Password must be at least 6 characters long.' };
  }
  if (!/[A-Z]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one uppercase letter.' };
  }
  if (!/[a-z]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one lowercase letter.' };
  }
  if (!/[0-9]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one number.' };
  }
  if (!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one special character.' };
  }
  return { valid: true, message: 'Password is valid!' };
};

export default validatePassword;
