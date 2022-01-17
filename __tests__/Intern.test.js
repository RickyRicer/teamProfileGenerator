const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test("Should instantiate Intern instance", () => {
    const i = new Intern('Rick', '204', 'rick@gmail.com', 'University of Denver');
    expect(typeof(i)).toBe("object");
  });

  test("Should set school via constructor arguments", () => {
    const school = 'University of Denver';
    const i = new Intern('Rick', '204', 'rick.ansay@gmail.com', 'University of Denver');
    expect(i.school).toBe(school);
  });
  

  test("Should return Intern for getRole()", () => {
    const expectedRole = 'Intern';
    const i = new Intern('Rick', '204', 'rick.ansay@gmail.com', 'University of Denver');
    expect(i.getRole()).toBe(expectedRole);
  });