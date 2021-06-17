// модуль для того, чтобы шарить драйвер в разные места
let browserDriver = null;

function setBrowserDriver(driver) {
  browserDriver = driver;
}

function getBrowserDriver() {
  return browserDriver;
}

module.exports = {
  setBrowserDriver,
  getBrowserDriver,
};
