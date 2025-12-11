export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const {onClose, title, children, buttonText = "Guardar", onSubmit, formId} = props;

  if (formId) {
    return (
      <div className="popup popup_is-opened">
        <div className="popup__container">
          <button className="popup__close-button" type="button" onClick={onClose}/>
          <fieldset className="popup__set">
            <h2 className="popup__title">{title}</h2>
            {children}
            <button type="submit" form={formId} className="popup__submit popup__save-button">{buttonText}</button>
          </fieldset>
        </div>
      </div>
    )
  }

  return (
    <div className="popup popup_is-opened">
      <form className="popup__container" noValidate onSubmit={onSubmit}>
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <fieldset className="popup__set">
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__submit popup__save-button">{buttonText}</button>
        </fieldset>
      </form>
    </div>
  )
}

