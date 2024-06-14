import { getAvailableCrous } from "../src";

/**
 * Simply list every available Crous.
 * Returned object can be used to find restaurants.
 */
void async function main() {
  const availableCrous = await getAvailableCrous();

  for (const crous of availableCrous) {
    console.log(`+ ${crous.name} with the identifier "${crous.identifier}"`);
  }
}();
