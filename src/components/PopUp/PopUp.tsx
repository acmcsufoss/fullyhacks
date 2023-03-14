import React, { useState } from 'react'

interface PopUpProps {
  title: string
  content: any
  action: string
}

const PopUp: React.FC<PopUpProps> = (props) => {
  const { title, content, action } = props
  const [isChecked, setCheck] = useState(true)
  return (
    <>
      <input
        type="checkbox"
        id="my-modal"
        checked={isChecked}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              onClick={() => setCheck(false)}
              className="normal-case btn bg-orange_100 border-none text-purple_main hover:bg-orange-200 hover:ease-in-out hover:duration-200">
              {action}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp
