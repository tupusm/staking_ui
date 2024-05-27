import React, { useEffect } from 'react';
import {
  Modal
} from 'react-bootstrap'

import { useSearchParams } from 'react-router-dom'

function About(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const aboutParam = searchParams.get('about')

  const show = props.show || aboutParam == 'restake'

  useEffect(() => {
    if (show && !aboutParam) {
      setSearchParams({ about: 'restake' })
    }
  }, [show, aboutParam]);

  function onHide(){
    setSearchParams({})
    props.onHide()
  }

  return (
    <>
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>About REStake</Modal.Title>
        </Modal.Header>
        <Modal.Body className="small">
          <h5>How REStake works</h5>
          <p>REStake makes use of a new feature in Cosmos blockchains called Authz. This allows a validator (or any other wallet) to send certain pre-authorized transactions on your behalf.</p>
          <p>When you enable REStake you authorize the validator to send Delegate messages for their own validator address. The validator cannot delegate to any other validators, and the authorisation expires automatically after one year and you can revoke at any time.</p>
          <p>You can also optionally add a total number of tokens the validator is allowed to delegate, or adjust the expiry date.</p>
          <h5>How to use REStake</h5>
          <ol>
            <li>Delegate to any validators who offers the REStake service.</li>
            <li>Enable REStake on the validators you want to compound rewards.</li>
            <li>Watch the countdown timer and profit!</li>
          </ol>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default About
