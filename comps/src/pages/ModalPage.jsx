import { useState } from 'react'
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }


  const actionBar = (<div>
    <Button onClick = {handleClose} primary>I Accept</Button>
  </div>
  );
  const modal =( 
    <Modal  onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );


  return (
    <div>
        <Button onClick = { handleClick } primary>Open Modal</Button>
        {showModal && modal}

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet enim vitae lectus faucibus tincidunt. Donec eu fringilla purus. Sed semper dapibus elementum. Nulla ornare volutpat mauris, in laoreet dolor semper nec. Donec sit amet mi elit. Vestibulum pulvinar augue non massa cursus, id tincidunt ligula blandit. Nullam fringilla ante in mi fermentum semper. Fusce bibendum justo nec turpis rutrum, ac pretium dolor ultrices. Etiam sagittis tellus quis ex imperdiet lacinia. Sed congue nibh et metus maximus, in fermentum urna condimentum. Proin non rhoncus lorem. Sed imperdiet neque lorem, ut aliquet leo ullamcorper vitae. Suspendisse suscipit iaculis eros, sed tempus dolor ornare ac. Morbi eu mattis nunc. Etiam gravida ipsum ex, ut condimentum nibh pellentesque et.</p>
        
    </div>
  )
}

export default ModalPage