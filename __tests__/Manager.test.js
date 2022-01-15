const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("Should instantiate Manager instance", () => {
    const m = new Manager('Rick', '204', 'rick@gmail.com', '24');
    expect(typeof(m)).toBe("object");
  });

  test("Should set officeNumber via constructor arguments", () => {
    const officeNumber = '24';
    const m = new Manager('Rick', '204', 'rick.ansay@gmail.com', '24');
    expect(m.officeNumber).toBe(officeNumber);
  });
  
  test("Should get officeNumber via getOfficeNumber())", () => {
    const expectedOfficeNumber = '24';
    const m = new Manager('Rick', '204', 'rick.ansay@gmail.com', expectedOfficeNumber);
    expect(m.getOfficeNumber()).toBe(expectedOfficeNumber);
  });
  

  test("Should return Manager for getRole()", () => {
    const expectedRole = 'Manager';
    const m = new Manager('Rick', '204', 'rick.ansay@gmail.com', '24');
    expect(m.getRole()).toBe(expectedRole);
  });