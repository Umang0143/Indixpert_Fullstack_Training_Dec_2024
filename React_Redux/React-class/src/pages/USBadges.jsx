import { CartFill, TelephoneFill, VectorPen } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";

const USBadges = () => {
  return (
    <div>
      <Table bordered>
      <thead>
        <tr>
          <th>Employes</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Payment Data</th>
          <th>Payment Status</th>
          <th>Employment Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Joseph Oden</td>
          <td className="d-flex align-items-center"><CartFill className="mx-1" />Sales</td>
          <td>$84,000</td>
          <td>Aug 3,2024</td>
          <td><Badge pill bg="pending" text="primary">PENDING</Badge></td>
          <td>Full-Time</td>
        </tr>

        <tr>
          <td>Carol Brown</td>
          <td className="d-flex align-items-center"><TelephoneFill className="mx-1" />Support</td>
          <td>$82,000</td>
          <td>Aug 6,2024</td>
          <td><Badge pill bg="negotiating" text="warning">NEGOTIATING</Badge></td>
          <td>Part-Time</td>
        </tr>

        <tr>
          <td>peggy Castello</td>
          <td className="d-flex align-items-center"><VectorPen className="mx-1" />Design</td>
          <td>$120,000</td>
          <td>Aug 13,2024</td>
          <td><Badge pill bg="failed" text="success">FAILED</Badge></td>
          <td>Full-Time</td>
        </tr>

        <tr>
          <td>Katherine Grey</td>
          <td className="d-flex align-items-center"><CartFill className="mx-1" />Sales</td>
          <td>$75,000</td>
          <td>Aug 19,2024</td>
          <td><Badge pill bg="paid" text="info">PAID</Badge></td>
          <td>Full-Time</td>
        </tr>
        
        <tr>
          <td>Sandra Palace</td>
          <td className="d-flex align-items-center"><VectorPen className="mx-1" />Design</td>
          <td>$54,000</td>
          <td>Aug 22,2024</td>
          <td><Badge pill bg="pending" text="primary">PENDING</Badge></td>
          <td>Contractor</td>
        </tr>
        
        <tr>
          <td>Nelson Metz</td>
          <td className="d-flex align-items-center"><CartFill className="mx-1" />Sales</td>
          <td>$28,000</td>
          <td>Aug 27,2024</td>
          <td><Badge pill bg="overdue" text="light">OVERDUE</Badge></td>
          <td>Part-Time</td>
        </tr>

        <tr>
          <td>Roger Ryder</td>
          <td className="d-flex align-items-center"><CartFill className="mx-1" />Sales</td>
          <td>$93,000</td>
          <td>Aug 31,2024</td>
          <td><Badge pill bg="paid" text="info">PAID</Badge></td>
          <td>Contractor</td>
        </tr>

        <tr>
          <td>Evan walter</td>
          <td className="d-flex align-items-center"><TelephoneFill className="mx-1" />Support</td>
          <td>$55,000</td>
          <td>Sep 5,2024</td>
          <td><Badge pill bg="negotiating" text="warning">NEGOTIATING</Badge></td>
          <td>Full-Time</td>
        </tr>

        <tr>
          <td>Julien Saint</td>
          <td className="d-flex align-items-center"><VectorPen className="mx-1" />Design</td>
          <td>$87,000</td>
          <td>Sep 11,2024</td>
          <td><Badge pill bg="overdue" text="light">OVERDUE</Badge></td>
          <td>Full-Time</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};

export default USBadges;
