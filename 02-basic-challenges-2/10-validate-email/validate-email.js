// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

//   return emailRegex.test(email);
// }

function validateEmail(email) {
  if (!email.includes("@")) return false;

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtention = domain.split(".");

  if (domainExtention.length < 2 || domainExtention[1].length < 2) return false;

  return true;
}

module.exports = validateEmail;

// test('Valid Email Addresses', () => {
//   expect(validateEmail('john@example.com')).toBe(true);
//   expect(validateEmail('jane.doe@domain.org')).toBe(true);
// });

// test('Invalid Email Addresses', () => {
//   expect(validateEmail('invalid-email')).toBe(false);
//   expect(validateEmail('@domain.com')).toBe(false);
//   expect(validateEmail('user@domain')).toBe(false);
// });
