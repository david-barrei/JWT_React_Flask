


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
    },

    actions: {
      login: async (email, password) => {
        try {
          const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          if (!res.ok) throw new Error(data.mensaje);

          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });

          return { success: true };
        } catch (error) {
          console.error("Login error:", error.message);
          return { success: false, error: error.message };
        }
      },

      register: async (email, password) => {
        try {
          const res = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data.message);

          return { success: true };
        } catch (error) {
          console.error("Register error:", error.message);
          return { success: false, error: error.message };
        }
      },

      createBook: async (book, token) => {
        try {
          const res = await fetch("http://localhost:5000/book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(book),
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data.message);

          return { success: true };
        } catch (error) {
          console.error("Create book error:", error.message);
          return { success: false, error: error.message };
        }
      },
    },
  };
};

export default getState;

