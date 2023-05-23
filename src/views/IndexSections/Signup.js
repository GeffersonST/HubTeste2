/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Badge,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Signup() {
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              Desbrave o futuro da tecnologia{" "}
              <span className="text-white"></span>
            </h3>
            <p className="text-white mb-3">
              No Code•Hub, acreditamos que a tecnologia está transformando o mundo
              ao nosso redor, e todos têm o direito de acessar informações
              atualizadas, cursos de qualidade e recursos educacionais
              abrangentes. É por isso que criamos esta plataforma para fornecer
              tudo o que você precisa em um único lugar.
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Register Page
              </Button>
            </div>
          </Col>
          <Col className="mb-lg-auto" lg="5">
            <Card className="card-register" color="success">
              <CardHeader>
                <CardImg alt="..." src={require("assets/img/square1.png")} />

                <CardTitle tag="h4">Guanabara </CardTitle>

                <Col className="mt-5 mt-sm-0" sm="3" xs="6"></Col>
              </CardHeader>

              <CardBody>
                <Badge className="badge-default">Tecnologia</Badge>

                <Badge className="badge-default">Educação</Badge>
                <Badge className="badge-default">Engajamento</Badge>
                <Badge className="badge-default">
                  Fundador do Curso em Vídeo
                </Badge>
                <Badge className="badge-default">Ensino de Qualidade</Badge>
              </CardBody>

              <CardFooter>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/guana1.png")}
                  style={{ width: "150px" }}
                />
                <Button
                  className="btn-round"
                  href="/profile-page"
                  color="info"
                  size="lg"
                >
                  Veja o Perfil
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col className="mb-lg-auto" lg="5">
            <Card className="card-register" color="warning">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square2.png")}
                />
                <CardTitle tag="h4">Deschamps</CardTitle>
              </CardHeader>
              <CardBody>
                <Badge className="badge-default">Tecnologia</Badge>
                <Badge className="badge-default">Educação</Badge>
                <Badge className="badge-default">Criatividade</Badge>
                <Badge className="badge-default">Fundador do TabNews</Badge>
                <Badge className="badge-default">Saúde Mental</Badge>
              </CardBody>
              <CardFooter>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/felipe1.jpg")}
                  style={{ width: "150px" }}
                />
                <Button
                  className="btn-round"
                  href="/profile-page2"
                  color="info"
                  size="lg"
                >
                  Veja o Perfil
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col className="mb-lg-auto" lg="5">
            <Card className="card-register" color="primary">
              <CardHeader>
                <CardImg alt="..." src={require("assets/img/square5.png")} />
                <CardTitle tag="h4">Loiane</CardTitle>
              </CardHeader>
              <CardBody>
                <Badge className="badge-default">Tecnologia</Badge>
                <Badge className="badge-default">Educação</Badge>
                <Badge className="badge-default">Escritora</Badge>
                <Badge className="badge-default">
                  Estados Unidos
                </Badge>
                <Badge className="badge-default">Angular</Badge>
                <Badge className="badge-default">Palestrante</Badge>
              </CardBody>
              <CardFooter>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/loiane1.jpg")}
                  style={{ width: "150px" }}
                />
                <Button
                  className="btn-round"
                  href="/profile-page3"
                  color="info"
                  size="lg"
                >
                  Veja o Perfil
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col className="mb-lg-auto" lg="5">
            <Card className="card-register" color="danger">
              <CardHeader>
                <CardImg alt="..." src={require("assets/img/square6.png")} />
                <CardTitle tag="h4">Attekita</CardTitle>
              </CardHeader>
              <CardBody>
                <Badge className="badge-default">Tecnologia</Badge>
                <Badge className="badge-default">Educação</Badge>
                <Badge className="badge-default">Mobile</Badge>
                <Badge className="badge-default">
                  Games
                </Badge>
                <Badge className="badge-default">Freelancer</Badge>
                <Badge className="badge-default">IOS</Badge>
                <Badge className="badge-default">X-Team</Badge>
              </CardBody>
              <CardFooter>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/atekita1.jpg")}
                  style={{ width: "150px" }}
                />
                <Button
                  className="btn-round"
                  href="/profile-page4"
                  color="info"
                  size="lg"
                >
                  Veja o Perfil
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
