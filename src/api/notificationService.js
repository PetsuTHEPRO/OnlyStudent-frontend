import { useToast } from 'vue-toastification'

const toast = useToast()

export default {
  success(message) {
    toast.success(message, 3000)
  },
  error(message) {
    toast.error(message, 3000)
  }
}