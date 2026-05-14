import { useState } from "react";
import { Modal, Tabs, Tab, Form, Button, Card } from "react-bootstrap";
import SuccessModal from "../successModal/SuccessModal.js";

const AuthModal = ({ show, onHide, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const defaultUsers = [
    {
      email: "user1@gmail.com",
      password: "user123",
      name: "Vitalyy",
      role: "user",
      phone: "+38 099 123 45 67",
      favoriteMovies: [1, 4, 7]
    },
    {
      email: "user2@gmail.com",
      password: "user123",
      name: "Petro",
      role: "user",
      phone: "+38 097 555 33 22",
      favoriteMovies: [2, 5]
    },
  ];

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    let user = defaultUsers.find(
      u => u.email.toLowerCase() === loginData.email.toLowerCase() && 
           u.password === loginData.password
    );

    if (user) {
      const savedUser = localStorage.getItem(`user_${user.email}`);
      if (savedUser) {
        user = JSON.parse(savedUser);
      } else {
        localStorage.setItem(`user_${user.email}`, JSON.stringify(user));
      }

      localStorage.setItem("currentUser", JSON.stringify(user));

      setSuccessMessage(`Ласкаво просимо, ${user.name}!`);
      setShowSuccess(true);

      setTimeout(() => {
        onLoginSuccess(user);
        onHide();
      }, 1600);
    } else {
      setError("Невірний email або пароль");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (registerData.password !== registerData.confirmPassword) {
      setError("Паролі не співпадають");
      return;
    }

    const newUser = {
      email: registerData.email,
      password: registerData.password,
      name: registerData.name,
      role: "user",
      phone: "",
      favoriteMovies: []
    };

    localStorage.setItem(`user_${newUser.email}`, JSON.stringify(newUser));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setSuccessMessage("Реєстрація успішна! Ви увійшли в особистий кабінет.");
    setShowSuccess(true);

    setTimeout(() => {
      onLoginSuccess(newUser);
      onHide();
    }, 1600);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered size="md">
        <Modal.Header closeButton className="border-0 pb-2">
          <Modal.Title className="w-100 text-center">
            <h2 className="mb-0 text-danger">NeoCinema</h2>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4 pb-5">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => { setActiveTab(k); setError(""); }}
            className="mb-4"
            variant="underline"
          >
            <Tab eventKey="login" title="Вхід">
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  {error && <p className="text-danger text-center mb-3">{error}</p>}

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        size="lg"
                        placeholder="your@email.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Пароль</Form.Label>
                      <Form.Control
                        type="password"
                        size="lg"
                        placeholder="Введіть пароль"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Button variant="danger" type="submit" size="lg" className="w-100 py-3 fw-bold">
                      Увійти
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="register" title="Реєстрація">
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  {error && <p className="text-danger text-center mb-3">{error}</p>}

                  <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ім'я та прізвище</Form.Label>
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Ваше ім'я"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        size="lg"
                        placeholder="your@email.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Пароль</Form.Label>
                      <Form.Control
                        type="password"
                        size="lg"
                        placeholder="Придумайте пароль"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Повторіть пароль</Form.Label>
                      <Form.Control
                        type="password"
                        size="lg"
                        placeholder="Повторіть пароль"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        required
                      />
                    </Form.Group>

                    <Button variant="danger" type="submit" size="lg" className="w-100 py-3 fw-bold">
                      Зареєструватися
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>

      <SuccessModal 
        show={showSuccess} 
        onHide={() => setShowSuccess(false)} 
        message={successMessage} 
      />
    </>
  );
};

export default AuthModal;