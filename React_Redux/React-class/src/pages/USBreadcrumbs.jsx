import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRight, FileCode, Folder2Open } from "react-bootstrap-icons";

const USBreadcrumbs = () => {
  const CustomLink = (props) => {
    const { href, children } = props;
    return (
      <>
        <Link to={href} className="text-decoration-none">
          {children}
        </Link>
        <ChevronRight className="mx-4" />
      </>
    );
  };

  const OptionalLink = (props) => {
    const { href, children } = props;
    return (
      <>
        <Folder2Open className="mx-2" color="yellow" />
        <Link to={href} className="text-decoration-none">
          {children}
        </Link>
        <ChevronRight className="mx-4" />
      </>
    );
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item
          href="#"
          linkAs={CustomLink}
          label="breadcrumb"
          bsPrefix=" "
        >
          Cloud
        </Breadcrumb.Item>

        <Breadcrumb.Item
          href="#"
          linkAs={CustomLink}
          label="breadcrumb"
          bsPrefix=" "
        >
          Files
        </Breadcrumb.Item>

        <Breadcrumb.Item
          href="#"
          linkAs={CustomLink}
          label="breadcrumb"
          bsPrefix=" "
        >
          Project
        </Breadcrumb.Item>

        <Breadcrumb.Item className="fw-bold" active>
          ProjectName
        </Breadcrumb.Item>
      </Breadcrumb>

      <br />
      <h4>Optional-Additional Example</h4>
      <Breadcrumb>
        <Breadcrumb.Item
          href="#"
          linkAs={OptionalLink}
          label="breadcrumb"
          bsPrefix=" "
          className="d-flex align-items-center"
        >
          Assignments
        </Breadcrumb.Item>

        <Breadcrumb.Item
          href="#"
          linkAs={OptionalLink}
          label="breadcrumb"
          bsPrefix=" "
          className="d-flex align-items-center"
        >
          Project
        </Breadcrumb.Item>

        <Breadcrumb.Item className="fw-bold d-flex align-items-center" active>
          <FileCode className="mx-2" color="blue" />
          ToDoList
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default USBreadcrumbs;
