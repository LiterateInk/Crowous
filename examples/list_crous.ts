import { getAvailableCrous } from "../src";
//                                ^^^^^^^^
// Replace with:             from "crowous";
// when using the package.

void async function main() {
  const availableCrous = await getAvailableCrous();

  for (const crous of availableCrous) {
    console.log(`${crous.name} (${crous.identifier})`);
  }
}();
