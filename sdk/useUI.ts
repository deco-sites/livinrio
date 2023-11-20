/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displaySearchContent = signal(false);

const state = {
  displaySearchContent,
};

export const useUI = () => state;
