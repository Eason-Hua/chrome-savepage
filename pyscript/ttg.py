import sys

def reform(message):
    if not message.startswith('ttg'): return
    i1 = 0
    while True:
        i2 = message.find('<tr class="hover_hr', i1)
        if i2 < 0:
            if i1 == 0: return
            break
        i1 += 1
    '''
<tr class="hover_hr  sticky" id="299094">
    '''
    pass

if __name__ == '__main__':
    if sys.argv[1] == 'test':
        message = open('/home/yc/aa/work/savepage.txt').read()
        reform(message)

