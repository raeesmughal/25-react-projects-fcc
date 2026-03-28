import './modal.css';
export default function Modal({ id, header, body, footer , onClose }) {
    return <div id={id || 'Modal'} className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <span className="close-modal-icon" onClick={onClose}>&times;</span>
                <h2>
                    {
                        header ? header : 'Header'
                    }
                </h2>
            </div>
            <div className="modal-body">
                {body ? (
                    body
                ) : (
                    <div>This is our Modal's Body</div>
                )}

            </div>
            <div className="modal-footer">

                <h2>
                    {
                        footer ? footer : "Footer"
                    }
                </h2>

            </div>
        </div>
    </div>
}