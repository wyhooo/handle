import { getHint } from '../logic'
import { IdiomsList } from '../logic/idioms'
import { currentIndex } from '~/storage'

export function getIndexOfList() {
  return currentIndex.value
}

export function setIndexOfList() {
  const len = IdiomsList.length
  const index = Math.floor(Math.random() * (len + 1))
  currentIndex.value = index
}

export function getAnswerOfDay() {
  const day = getIndexOfList()
  const word = IdiomsList[day] || ''
  const hint = IdiomsList[day][day % 4] || ''
  return {
    word,
    hint: hint || getHint(word),
  }
}
