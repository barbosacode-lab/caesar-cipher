module.exports = (word, rot = 13) => {

    const _rotation = rot => rot;
    const _word = str => str.toUpperCase().split('');
    const _range = (start, end) => Array(end - start + 1).fill(0).map((_, idx) => start + idx);
    const _sequenceNumbers = num => Array(num).fill(1).map((el, idx) => el[idx] = ++idx);
    const _sequenceLetters = () => Array.from(String.fromCodePoint(..._range(65, 90)));
    const _joinSequenceNumbersAndLetters = (numbers, letters) => letters.map((el, idx) => [el].concat(numbers.slice(idx, ++idx)));

    const _toObject = str => {
        return { str }
    };

    const _offSet = rot => (_el, idx, arr) => {
        if (idx < arr.length - rot) {
            return arr[idx + rot]
        }
    };

    const _notContemplatedFromOffSet = rot => (_el, idx, arr) => {
        if (idx < rot) {
            return arr[idx]
        }
    };

    const _cipher = (noCipher, offSet, notContemplatedFromOffSet) => {
        return noCipher.map(offSet(rotation))
            .concat(
                noCipher.map(notContemplatedFromOffSet(rotation)))
            .filter(el => el)
    };

    const _searchLetterForEncryptOrDecrypt = (str, origin, ciphed, encrypt = true) => {
        if (encrypt) {
            return str.map((_letter, i, strArray) =>
                origin.map((_letterOrigin, idx, originArray) =>
                    strArray[i] === originArray[idx][0]
                        ? idx
                        : false)
                    .filter(el => el || el === 0))
                .flat()
        }
        return str.map((letter, _idx, _) =>
            ciphed.map((el, position, _) =>
                el[0] === letter
                    ? position
                    : false)
                .filter(el => el || el === 0))
            .flat()
    }

    const encryptWord = () => {
        return _toObject(_indexesFromNoCipherForEncrypt.map((_, idx, _indexesFromNoCipherForEncryptArr) =>
            _ciphed[_indexesFromNoCipherForEncryptArr[idx]][0]).join(''))
    };

    const decryptWord = () => {
        return _toObject(_indexesFromCipherForDecrypt.map((el, idx, _indexesFromCipherForDecryptArr) =>
            _noCipher[_indexesFromCipherForDecryptArr[idx]][0]).join(''))
    };


    const rotation = _rotation(rot);
    const completedWord = _word(word);
    const _noCipher = _joinSequenceNumbersAndLetters(_sequenceNumbers(26), _sequenceLetters());
    const _ciphed = _cipher(_noCipher, _offSet, _notContemplatedFromOffSet);
    const _indexesFromNoCipherForEncrypt = _searchLetterForEncryptOrDecrypt(completedWord, _noCipher);
    const _indexesFromCipherForDecrypt = _searchLetterForEncryptOrDecrypt(completedWord, _ciphed, false);


    return {
        encryptWord,
        decryptWord
    }
}