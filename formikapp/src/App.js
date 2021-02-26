import { Formik } from 'formik'
import './App.css'
import axios from 'axios'

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          postalCode: '',
          address: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.name) {
            errors.name = '入力してください。'
          }
          if (!values.postalCode) {
            errors.postalCode = '入力してください。'
          }
          if (!values.address) {
            errors.address = '入力してください。'
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await axios.post('/form', values)
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="colum">
              <div className="row">
                <input
                  className="input"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="名前"
                />
              </div>
              <div className="row alert">
                {errors.name && touched.name && errors.name}
              </div>
            </div>
            <div className="row">
              <input
                className="input"
                name="postalCode"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.postalCode}
                placeholder="郵便番号"
              />
            </div>
            <div className="row alert">
              {errors.postalCode &&
                touched.postalCode &&
                errors.postalCode}
            </div>
            <div className="row">
              <input
                className="input"
                name="address"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="住所"
              />
            </div>
            <div className="row alert">
              {errors.address &&
                touched.address &&
                errors.address}
            </div>
            <div className="row">
              <button
                className="button"
                type="submit"
                disabled={isSubmitting}
              >
                送信
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default App
