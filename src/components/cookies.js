import { useState } from 'react';
import Cookies from 'universal-cookie';

export const useCookie = (key, value, options) => {
  const cookies = new Cookies();
  const [cookie, setCookie] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    cookies.set(key, value, options);
  });

  const updateCookie = (value, options) => {
    setCookie(value);
    removeItem(value);
    cookies.set(key, value, options);
  };

  const removeItem = (key) => {
    cookies.remove(key);
  };

  return [cookie, updateCookie, removeItem];
};