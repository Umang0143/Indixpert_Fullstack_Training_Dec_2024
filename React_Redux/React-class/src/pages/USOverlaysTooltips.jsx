import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

const USOverlaysTooltips = () => {
  return (
    <div className='bg-white'>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="outline-secondary" className="me-2 mt-5 ms-3 mb-5">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
      <br />
      <hr />

      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary" className="me-2 ms-4 mt-5 mb-5">Tooltip on {placement}</Button>
        </OverlayTrigger>
        ))}
    </div>
  )
}

export default USOverlaysTooltips