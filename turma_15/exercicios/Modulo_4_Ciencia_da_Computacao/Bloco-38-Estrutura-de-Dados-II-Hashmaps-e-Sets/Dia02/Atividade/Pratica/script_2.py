def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    print(biggest)

longer_no_repeating_substring_len("serdevemuitolegalmasehprecisoestudarbastante")

# Resposta da análise de complexidade: A função longer_no_repeating_substring_len realiza dois fors um dentro do outro,
# e por isso sua Complexidade de Tempo é O(n²).